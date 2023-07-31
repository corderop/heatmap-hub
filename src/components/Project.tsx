import MarkDay from '../services/projects/application/MarkDay.ts'
import UnmarkDay from '../services/projects/application/UnMarkDay.ts'
import type ProjectModel from '../services/projects/domain/Project.ts'
import ProjectRepositoryLocalStorage from '../services/projects/infraestructure/ProjectRepositoryLocalStorage.ts'
import Heatmap from './Heatmap.tsx'

interface Props {
  project: ProjectModel
  onDelete: () => void
}

const Project: React.FC<Props> = ({ project, onDelete }: Props) => {
  async function performDayChange (date: Date, enabled: boolean): Promise<void> {
    let actionService

    if (enabled) {
      actionService = new MarkDay(new ProjectRepositoryLocalStorage())
    } else {
      actionService = new UnmarkDay(new ProjectRepositoryLocalStorage())
    }

    await actionService.execute(project, date)
  }

  return (
    <section className="p-3 max-w-4xl w-full border rounded-md">
      <header className="mb-3 mr-1 flex align-center gap-3">
        <h1 className="text-lg flex-grow">{project.name}</h1>
        <div className="flex gap-3 flex-grow-0">
          <button
            aria-label={`Delete ${project.name} project`}
            onClick={() => {
              onDelete()
            }}
          >
            🗑️
          </button>
        </div>
      </header>
      <Heatmap days={project.getFlatDays()} onDayChange={performDayChange} />
    </section>
  )
}

export default Project
