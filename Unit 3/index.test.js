const router = require('./routes/players')
const superTest = require('supertest')

describe('API Test', () => {
  let playerId

  //tests to make sure making a player works
  it('should make a new player', async () => {
    const res = await(router).post('/').send({
      First_Name: 'Jim',
      Last_Name: 'Smith',
      Average_Points: 1,
      Average_Assists: 1,
      Average_Steals: 1,
      Average_Blocks: 1
    })
    expect(res.statusCode).toEqual(201)
    expect(res.body.First_Name).toEqual('Jim')
    expect(res.body.Last_Name).toEqual('Smith')
    expect(res.body.Average_Points).toEqual(1)
    expect(res.body.Average_Assists).toEqual(1)
    expect(res.body.Average_Steals).toEqual(1)
    expect(res.body.Average_Blocks).toEqual(1)
    playerId = res.body._id
  })
    
  //tests if it can get all players  
  it('should get all players', async () => {
    const res = await superTest(router).get('/')
    expect(res.statusCode).toEqual(200)
    expect(Array.isArray(res.body)).toBeTruthy()
  })
  
  //gets the player by the ID that was made earlier  
  it('should get a single player by ID', async () => {
    const res = await superTest(router).get(`/id/${playerId}`)
    expect(res.statusCode).toEqual(200)
    expect(res.body.First_Name).toEqual('Jim')
    expect(res.body.Last_Name).toEqual('Smith')
    expect(res.body.Average_Points).toEqual(1)
    expect(res.body.Average_Assists).toEqual(1)
    expect(res.body.Average_Steals).toEqual(1)
    expect(res.body.Average_Blocks).toEqual(1)
  })

  //updates a player
  it('should update a player', async () => {
    const res = await superTest(router).patch(`/${playerId}`).send({
      First_Name: 'Steve',
      Last_Name: 'Jenkinds',
      Average_Points: 2,
      Average_Assists: 2,
      Average_Steals: 2,
      Average_Blocks: 2
      })
      expect(res.statusCode).toEqual(200)
      expect(res.body.First_Name).toEqual('Steve')
      expect(res.body.Last_Name).toEqual('Jenkinds')
      expect(res.body.Average_Points).toEqual(2)
      expect(res.body.Average_Assists).toEqual(2)
      expect(res.body.Average_Steals).toEqual(2)
      expect(res.body.Average_Blocks).toEqual(2)
  })

  //deletes a player
  it('should delete a player', async () => {
    const res = await superTest(router).delete(`/${playerId}`);
    expect(res.statusCode).toEqual(200)
    expect(res.body.First_Name).toEqual('Steve')
    expect(res.body.Last_Name).toEqual('Jenkinds')
    expect(res.body.Average_Points).toEqual(2)
    expect(res.body.Average_Assists).toEqual(2)
    expect(res.body.Average_Steals).toEqual(2)
    expect(res.body.Average_Blocks).toEqual(2)
  })

})


