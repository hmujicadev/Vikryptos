import { useState } from 'react'
import { useRouter } from 'next/router'
import { LANGUAJES_OPTIONS } from '../../../constants'
import ROUTES from '../../../routes'

const SelectCountries = () => {
  const router = useRouter()
  const [langSelected, setLangSelected] = useState('')

  const handleLangChange = (e: React.FormEvent<HTMLSelectElement>) => {
    const newLang = (e.currentTarget.value as string).toLocaleLowerCase()
    setLangSelected(e.currentTarget.value)
    router.push(`${ROUTES.home.href}?lang=${newLang}`, undefined, {
      shallow: false,
    })
  }
  return (
    <select value={langSelected} onChange={handleLangChange}>
      {LANGUAJES_OPTIONS.map((language) => (
        <option key={language}>{language}</option>
      ))}
    </select>
  )
}

export default SelectCountries
