import React, { useState } from 'react'

interface Props {
  date: Date
  selected: boolean
  actionable?: boolean
  onChange: (value: boolean) => Promise<void>
}

const Day: React.FC<Props> = ({
  date,
  selected,
  actionable = true,
  onChange
}) => {
  const [isSelected, setIsSelected] = useState(selected)

  async function performSelection (): Promise<void> {
    const nextState = !isSelected
    setIsSelected((prevState) => !prevState)

    try {
      await onChange(nextState)
    } catch (error) {
      console.log(error)
      setIsSelected((prevState) => !prevState)
    }
  }

  return (
    <input
      aria-label={date.toLocaleDateString()}
      type="checkbox"
      className={
        'w-3 h-3 rounded-sm appearance-none checked:bg-[#50c878] bg-[#50c87830] cursor-pointer hover:border hover:border-[#50c878] disabled:border-none disabled:cursor-not-allowed'
      }
      title={date.toLocaleDateString()}
      onChange={performSelection}
      checked={isSelected}
      disabled={!actionable}
    />
  )
}

export default Day
