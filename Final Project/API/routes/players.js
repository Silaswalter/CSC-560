const express = require('express')
const router = express.Router()
const Player = require('../models/players')

//Getting all
router.get('/', async (req, res) => {
    try{
        const players = await Player.find()
        res.json(players)
    }catch (err) {
        res.status(500).json({message: err.message})
    }
})

//Getting One)
router.get('/id/:id', getPlayer, (req, res) => {
    res.json(res.player)
})

//Creating one
router.post('/', async (req, res) => {
    const player = new Player({
            First_Name: req.body.First_Name,
            Last_Name: req.body.Last_Name,
            Average_Points: req.body.Average_Points,
            Average_Assists: req.body.Average_Assists,
            Average_Steals: req.body.Average_Steals,
            Average_Blocks: req.body.Average_Blocks
    })
    try{
        const newPlayer = await player.save()
        res.status(201).json(newPlayer)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

//Update One
router.patch('/:id', getPlayer, async (req, res) => {
    if(req.body.First_Name != null) {
        res.player.First_Name = req.body.First_Name
    }
    if(req.body.Last_Name != null) {
        res.player.Last_Name = req.body.Last_Name
    }
    if(req.body.Average_Points != null) {
        res.player.Average_Points = req.body.Average_Points
    }
    if(req.body.Average_Assists != null) {
        res.player.Average_Assists = req.body.Average_Assists
    }
    if(req.body.Average_Steals != null) {
        res.player.Average_Steals = req.body.Average_Steals
    }
    if(req.body.Average_Blocks != null) {
        res.player.Average_Blocks = req.body.Average_Blocks
    }
    

    try {
        const updatePlayer = await res.player.save()
        res.json(updatePlayer)
    } catch (err) {
        res.status(400).json({message: err.message})
    }

})

//deleting one
router.delete('/:id', getPlayer, async (req, res) => {
    try {
        await res.player.deleteOne()
        res.json({message: 'Deleted Player'})
    } catch (err) {
        res.status(500).json({message: err.message})
    }

})

//function for finding a player
async function getPlayer(req, res, next) {
    let player
    try {
        player = await Player.findById(req.params.id)
        if (player == null) {
            return res.status(404).json({message: 'Cannot find player'})
        }
    } catch (err) {
        return res.status(500).json({message: err.message})
    }

    res.player = player
    next()
}

//Get player with the most average points
router.get('/top-average-points', async (req, res) => {
    try{
        const players = await Player.find().limit(1).sort({Average_Points:-1})
        res.json(players)
    }catch (err) {
        res.status(500).json({message: err.message})
    }
})

//Get player with the most average assists
router.get('/top-average-assists', async (req, res) => {
    try{
        const players = await Player.find().limit(1).sort({Average_Assists:-1})
        res.json(players)
    }catch (err) {
        res.status(500).json({message: err.message})
    }
})

//Get player with the most average steals
router.get('/top-average-steals', async (req, res) => {
    try{
        const players = await Player.find().limit(1).sort({Average_Steals:-1})
        res.json(players)
    }catch (err) {
        res.status(500).json({message: err.message})
    }
})

//Get player with the most average blocks
router.get('/top-average-blocks', async (req, res) => {
    try{
        const players = await Player.find().limit(1).sort({Average_Blocks:-1})
        res.json(players)
    }catch (err) {
        res.status(500).json({message: err.message})
    }
})

//Get list of players starting with the lowest point average players
router.get('/point-order', async (req, res) => {
    try{
        const players = await Player.find().sort({Average_Points:1})
        res.json(players)
    }catch (err) {
        res.status(500).json({message: err.message})
    }
})

module.exports = router