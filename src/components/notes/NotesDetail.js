import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import moment from 'moment';

const NotesDetail = (props) => {
    const id = props.match.params.id
    useFirestoreConnect([{ collection: 'notes', doc: id }]);
    const note = useSelector(({ firestore: { data } }) => data.notes && data.notes[id])
    return (
        <div className="container section">
            <div className="card z-depth-0"  style={{borderRadius:'10px'}}>
                <div className="card-content">
                    <span className="card-title">{note?.title}</span>
                    <p>{note?.content}</p>
                </div>
                <div className="card-action grey lighten-4 grey-text" style={{borderRadius:'10px'}}>
                    <div>{moment(note?.createdAt.toDate()).calendar()}</div>
                </div>
            </div>
        </div>
    )
}

export default NotesDetail
