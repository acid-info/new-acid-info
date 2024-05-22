import {
  ESortingDirection,
  ESortingType,
  SortDropdownProps,
  SortingLabels,
  generateValueId,
  valueIdToEnums,
} from '@/components/SortDropdown/index'
import { Dropdown, DropdownOption } from '@acid-info/lsd-react'
import React, { useCallback, useState } from 'react'

const OPTION_LABELS: SortingLabels = {
  [ESortingType.DATE]: {
    [ESortingDirection.ASCENDING]: 'Old to New',
    [ESortingDirection.DESCENDING]: 'New to Old',
  },
}

const SortDropdown: React.FC<SortDropdownProps> = (props) => {
  const { sortBy, customLabels } = props

  const DEFAULT_SORT_VALUE = generateValueId(
    ESortingType.DATE,
    ESortingDirection.ASCENDING,
  )
  const [value, setValue] = useState(DEFAULT_SORT_VALUE)

  const labels = useCallback(() => {
    const labelsToUse = customLabels ? customLabels : OPTION_LABELS
    const options: DropdownOption[] = []

    sortBy.forEach((type) => {
      options.push({
        name: labelsToUse[type][ESortingDirection.ASCENDING],
        value: generateValueId(type, ESortingDirection.ASCENDING),
      })

      options.push({
        name: labelsToUse[type][ESortingDirection.DESCENDING],
        value: generateValueId(type, ESortingDirection.DESCENDING),
      })
    })

    return options
  }, [sortBy, customLabels])

  const onChange = (value: string | string[]) => {
    let sanitizedValue = Array.isArray(value) ? value[0] : value
    const [type, direction] = valueIdToEnums(sanitizedValue)

    setValue(sanitizedValue)

    if (props.onChange) {
      props.onChange(type, direction)
    }
  }

  return (
    <Dropdown
      value={value}
      onChange={onChange}
      options={labels()}
      size="medium"
    />
  )
}

export default SortDropdown
