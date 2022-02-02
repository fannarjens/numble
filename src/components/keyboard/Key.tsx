import { ReactNode } from 'react'
import classnames from 'classnames'
import { KeyValue } from '../../lib/keyboard'
import { CharStatus } from '../../lib/statuses'

type Props = {
  children?: ReactNode
  value: KeyValue
  width?: number
  status?: CharStatus
  onClick: (value: KeyValue) => void
}

export const Key = ({
  children,
  status,
  width = 96,
  value,
  onClick,
}: Props) => {
  const classes = classnames(
    'flex items-center justify-center rounded mx-0.5 text-xs font-bold cursor-pointer select-none dark:text-white',
    {
      'bg-slate-200 hover:bg-slate-300 active:bg-slate-400 dark:bg-slate-400 dark:hover:bg-slate-500 dark:active:bg-slate-600':
        !status,
      'bg-slate-700 text-white': status === 'absent',
      'bg-lime-600 hover:bg-lime-700 active:bg-lime-800 text-white': status === 'correct',
      'bg-sky-400 hover:bg-sky-500 active:bg-sky-600 text-white': status === 'present',
    }
  )

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick(value)
    event.currentTarget.blur()
  }

  return (
    <button
      style={{ width: `${width}px`, height: '40px' }}
      className={classes}
      onClick={handleClick}
    >
      {children || value}
    </button>
  )
}
