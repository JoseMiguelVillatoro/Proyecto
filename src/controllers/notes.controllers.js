const NotesCtrl = {};


NotesCtrl.RenderNewForm = (req, res) => {
    //res.send('Se ha creado una nueva tarea')
    res.render('notes/new-note')

}

NotesCtrl.CreateNewNote = (req, res) => {
    console.log(req.body);
    res.send('Se ha agregado una nueva tarea')
}


NotesCtrl.RenderNotes = (req, res) => {
    res.send('Todas las tareas')
}

NotesCtrl.RenderEditNote = (req, res) => {
    res.send('Se esta editando la tarea')
}

NotesCtrl.RenderUpdateNotes = (req, res) => {
    res.send('Se esta editando la tarea')
}

NotesCtrl.DeleteNotes = (req, res) => {
    res.send('Se ha eliminado la tarea')
}



module.exports = NotesCtrl