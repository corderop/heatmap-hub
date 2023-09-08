import React from 'react'

interface Props {
  tabs: string[]
  value?: string
  onChange: (selectedTab: string) => void
}

const TabSelector: React.FC<Props> = ({ tabs, value, onChange }) => {
  value = value ?? tabs[0]

  return (
    <section className="max-w-sm mx-auto w-full flex bg-green-100 rounded-xl">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`flex-grow p-3 m-2 ${value === tab ? 'bg-green-400' : ''} rounded-xl font-medium`}
          onClick={() => { onChange(tab) }}
        >
          {tab}
        </button>
      ))}
    </section>
  )
}

export default TabSelector
