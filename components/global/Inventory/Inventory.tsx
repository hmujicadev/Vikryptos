import Filters from './Filters/Filters'
import Cards from './Cards/Cards'
import { InventoryWrapper } from './Inventory.styles'

const Inventory = () => {
  return (
    <InventoryWrapper>
      <Filters />
      <Cards />
    </InventoryWrapper>
  )
}

export default Inventory
