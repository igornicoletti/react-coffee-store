import { useState } from 'react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { MoonIcon, SunIcon } from 'lucide-react'

const people = [
  { id: 1, icon: <SunIcon className="size-6 shrink-0" aria-hidden={true} />, name: 'Light' },
  { id: 2, icon: <MoonIcon className="size-6 shrink-0" aria-hidden={true} />, name: 'Dark' },
]

export const ThemeComponent = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0])

  return (
    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
      <ListboxButton>{selectedPerson.icon}</ListboxButton>
      <ListboxOptions className="origin-top transition duration-250 ease-out data-[closed]:scale-95 data-[closed]:opacity-0" transition anchor="bottom">
        {people.map((person) => (
          <ListboxOption key={person.id} value={person} className="flex items-center gap-2">
            {person.icon}
            {person.name}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  )
}