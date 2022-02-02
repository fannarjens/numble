import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the number in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the number.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="3" status="correct" />
        <Cell value="1" />
        <Cell value="8" />
        <Cell value="0" />
        <Cell value="6" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The digit 3 is in the number and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="4" />
        <Cell value="0" />
        <Cell value="7" status="present" />
        <Cell value="9" />
        <Cell value="2" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The digit 7 is in the number but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="2" />
        <Cell value="7" />
        <Cell value="6" />
        <Cell value="3" status="absent" />
        <Cell value="2" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The digit 3 is not in the number in any spot.
      </p>
    </BaseModal>
  )
}
