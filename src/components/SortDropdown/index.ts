import { AllKeysRequired, DynamicObject } from '@/types/util.types'

export enum ESortingType {
  DATE = 'DATE',
}

export enum ESortingDirection {
  ASCENDING = 'ASCENDING',
  DESCENDING = 'DESCENDING',
}

export type SortingLabels = DynamicObject<
  DynamicObject<string, ESortingDirection, AllKeysRequired>,
  ESortingType,
  AllKeysRequired
>

export type SortDropdownOnChangeHandler = (
  type: ESortingType,
  direction: ESortingDirection,
) => void

export const generateValueId = (
  type: ESortingType,
  direction: ESortingDirection,
) => {
  return `${type}-${direction}`
}

export const valueIdToEnums = (
  value: string,
): [ESortingType, ESortingDirection] => {
  const [type, direction] = value.split('-')

  return [type as ESortingType, direction as ESortingDirection]
}

export type SortDropdownProps = {
  sortBy: ESortingType[]
  onChange?: SortDropdownOnChangeHandler
  customLabels?: SortingLabels
}
