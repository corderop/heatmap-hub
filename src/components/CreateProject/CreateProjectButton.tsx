import React from 'react'

interface Props {
  onClick: () => void
}

const CreateProjectButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      className="p-3 max-w-4xl w-full border rounded-md text-slate-600"
      onClick={onClick}
    >
      ➕ Add new Project
    </button>
  )
}

export default CreateProjectButton
