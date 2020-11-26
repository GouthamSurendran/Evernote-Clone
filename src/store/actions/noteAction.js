export const addNote = (note) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()
        firestore.collection('notes')
            .add({
                ...note,
                favourite: false,
                createdAt: new Date()
            })
            .then(() => {
                console.log('Note added succesfully')
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const deleteNote = (note) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()
        firestore.collection('notes').doc(note.id).delete()
            .then(() => {
                console.log('Note Deleted!')
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const saveFav = (note) => {
    return (dispatch, getState, { getFirestore }) => {
        const favStatus = !note.favourite
        const firestore = getFirestore()
        firestore.collection('notes').doc(note.id).update({
            favourite: favStatus
        })
            .then(() => {
                console.log('Toggle Favourite Succesful!')
            })
            .catch((err) => {
                console.log(err)
            })
    }
}