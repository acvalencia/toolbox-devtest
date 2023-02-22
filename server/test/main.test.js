// Require the dev-dependencies
import chai from 'chai'
import chaiHttp from 'chai-http'
import { app } from '../index.js'

chai.should()
chai.use(chaiHttp)

describe('Test Rest Server', () => {
  /*
   * Test the /GET route
   */
  describe('GET /files/data', () => {
    it('it should GET all the files', (done) => {
      chai
        .request(app)
        .get('/files/data')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('array')
          res.body.length.should.be.eql(5)
          done()
        })
    })

    it('it should GET the file from the query param', (done) => {
      chai
        .request(app)
        .get('/files/data?fileName=test9.csv')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('array')
          res.body.length.should.be.eql(1)
          done()
        })
    })

    it('it should NOT GET the file from the query param', (done) => {
      chai
        .request(app)
        .get('/files/data?fileName=test5.csv')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('array')
          res.body.length.should.be.eql(0)
          done()
        })
    })

    it('it should NOT GET any file', (done) => {
      chai
        .request(app)
        .get('/file/data')
        .end((err, res) => {
          res.should.have.status(404)
          done()
        })
    })
  })

  describe('GET /files/list', () => {
    it('it should GET the list of files', (done) => {
      chai
        .request(app)
        .get('/files/list')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('array')
          res.body.length.should.be.eql(9)
          done()
        })
    })

    it('it should NOT GET the list of files', (done) => {
      chai
        .request(app)
        .get('/file/list')
        .end((err, res) => {
          res.should.have.status(404)
          done()
        })
    })
  })
})
