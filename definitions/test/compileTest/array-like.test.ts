import { tstl } from "../util"

test("lua inventory", () => {
  tstl`
    const myInventory = game.create_inventory(4)

    const slot1 = myInventory[0]
    const slot2 = myInventory[1]
    const len = myInventory.length
  `.expectToMatchSnapshot()
})
