import { Person } from "./personTypes"

export function logIfInTree(targetName: string, topPerson: Person): void {

    const familyQueue: Person[] = []
    const familyList: string[] = []
    familyQueue.unshift(topPerson)

    while (familyQueue.length > 0) {
        const currentPerson = familyQueue.shift()!

        //console.log(currentPerson.name)
        familyList.push(currentPerson.name)
        if (currentPerson.name === targetName) {
            console.log(`FOUND <${targetName}>`)
            return
        }

        for (const child of currentPerson.children) {
            familyQueue.unshift(child)
        }
    }
    console.log("No such person found")
}