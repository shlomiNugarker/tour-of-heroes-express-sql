import { getHashes } from 'crypto'
import { HEROES } from '../../mock-heroes'
import { Hero } from '../../interfaces/hero'

export default {
  getById,
  query,
  update,
  add,
}

let gHeroes = HEROES

const COLLECTION_NAME = 'heroes'

async function query() {
  try {
    // const collection = await dbService.getCollection(COLLECTION_NAME)
    // const heroes = await collection.find({}).toArray()

    if (!gHeroes || !gHeroes.length) gHeroes = HEROES

    return gHeroes
  } catch (err) {
    throw err
  }
}

async function getById(heroId: string) {
  try {
    // const collection = await dbService.getCollection(COLLECTION_NAME)
    // const hero = await collection.findOne({ id: ObjectId(heroId) })
    // return hero
    return gHeroes.find((hero) => hero.id.toString() === heroId)
  } catch (err) {
    throw err
  }
}

async function update(heroToUpdate: Hero) {
  try {
    // const id = new ObjectId(codeBlock._id)
    // delete hero._id
    // const collection = await dbService.getCollection(COLLECTION_NAME)
    // await collection.updateOne({ _id: id }, { $set: { ...hero } })
    // const savedHero = { ...hero, _id: id }
    // return savedHero

    const updatedHeroes = gHeroes.map((hero) =>
      hero.id === heroToUpdate.id ? heroToUpdate : hero
    )
    gHeroes = updatedHeroes
    return heroToUpdate
  } catch (err) {
    throw err
  }
}

async function add(hero: Hero) {
  try {
    // const heroToAdd = { ...hero }
    // const collection = await dbService.getCollection('code_block')
    // await collection.insertOne(heroToAdd)
    // return heroToAdd

    gHeroes.push(hero)
    console.log(gHeroes)

    return hero
  } catch (err) {
    throw err
  }
}