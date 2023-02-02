
const toJSON = require("../utils/toJSON");
const axios = require("axios")


var fav = []

const getCharacterId = async (req, res) => {

    try {
        const { id } = req.params
        const result = await axios(`https://rickandmortyapi.com/api/character/${id}`)
        const characterResponse = result.data

        const character = {
            image: characterResponse.image,
            name: characterResponse.name,
            gender: characterResponse.gender,
            species: characterResponse.species,
            id: characterResponse.id
        }
        res.status(200).json(character)

    } catch (error) {
        res.status(404).json({error: "character not found"})
    }



}



const getDetailId = async (req, res) => {

    try {
        const { detailId } = req.params
        const result = await axios(`https://rickandmortyapi.com/api/character/${detailId}`)
        const detailCharacterResponse = result.data

        const character = {
            image: detailCharacterResponse.image,
            name: detailCharacterResponse.name,
            gender: detailCharacterResponse.gender,
            species: detailCharacterResponse.species,
            id: detailCharacterResponse.id,
            status: detailCharacterResponse.status,
            origin: detailCharacterResponse.origin
        }

        res.status(200).json(character)

    } catch (error) {
        res.status(500).end("Not found details", error)
    }


}



const getFav = (req, res) => {
    res.status(200).end(JSON.stringify(fav))
}




const postFav = (req, res) => {
    fav.push(req.body)
    res.status(200).end(JSON.stringify(req.body))
}




const deleteFavId = (req, res) => {
    const { id } = req.params
    const character = fav.find(c => c.id == id)
    if (character) {
        fav = fav.filter(e => e.id != id)
        res.status(200).end(JSON.stringify(character))
    } else {
        res.status(400).end("character not found in fav")
    }
}




module.exports = { getCharacterId, getDetailId, getFav, postFav, deleteFavId }