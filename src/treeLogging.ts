import { Person } from "./personTypes";


export function logAllPeopleInTree(person: Person): string[] {

    const familyStack: Person[] = [];
    const familyList: string[] = []
    familyStack.push(person);

    while (familyStack.length > 0) {
        const currentPerson = familyStack.pop()!;
        //console.log(currentPerson.name);
        familyList.push(currentPerson.name)
        for (const child of currentPerson.children) {
            familyStack.push(child);
        }
    }

    console.log(familyList.length)
    return familyList;
}

export function logAllPeopleInTreeWithQueue(topPerson: Person): string[] {

    const familyQueue: Person[] = []
    const familyList: string[] = []
    familyQueue.unshift(topPerson)

    while (familyQueue.length > 0) {
        const currentPerson = familyQueue.shift()!

        //console.log(currentPerson.name)
        familyList.push(currentPerson.name)

        for (const child of currentPerson.children) {
            familyQueue.unshift(child)
        }
    }
    console.log(familyList.length)
    return familyList
}

/*
  function logAllPeopleInTree(topPerson)
    create an empty stack of People
    put the topPerson onto the top of this new stack

        repeat the following as long as the stack is not empty:
            take the top person from the stack
                console log their name
        add their kids to the top of the stack of people (in any order)
  */

/*
SET FAMILY_QUEUE = empty array
unshift person onto FAMILY_QUEUE

While FAMILY_QUEUE isn't empty
    SET CURRENT_PERSON = sfhited person of queue
    log current person

    for each CHILD of CURRENT_PERSON
        unshift child onto FAMILY_QUEUE
    endfor
endwhile
*/