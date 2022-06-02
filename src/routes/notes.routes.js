const { Router } = require('express');

const router = Router()

const { 
        RenderNewForm, 
        CreateNewNote, 
        RenderNotes, 
        RenderEditNote, 
        RenderUpdateNotes, 
        DeleteNotes 
      } = require('../controllers/notes.controllers');

// Nueva notas
router.get('/notes/add', RenderNewForm)
router.post('/notes/new-note', CreateNewNote)

//Ver todas las notas
router.get('/notes', RenderNotes)

//Edit notes
router.get('/notes/edit/:id', RenderEditNote)
router.put('/notes/edit/:id', RenderUpdateNotes)

//Delete Note
router.delete('/noted/delete/:id', DeleteNotes)


module.exports = router
