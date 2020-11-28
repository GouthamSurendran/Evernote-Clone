import React,{useEffect,useState} from 'react';
import Form from './Form';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import NotesList from '../../components/notes/NotesList';

const Home = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

    useEffect(() => {
        window.addEventListener("resize", () => {
            const ismobile = window.innerWidth < 700;
            if (ismobile !== isMobile) setIsMobile(ismobile);
        }, false);
    }, [isMobile]);

    useFirestoreConnect([{ collection: 'notes', orderBy: ['createdAt', 'desc'] }])
    const notes = useSelector((state) => state.firestore.ordered.notes)
    return (
        <div className="container">
            <div className={`${isMobile ? "center-align" : "row center-align"}`}>
                <div className="col s7"><Form /></div>
                <div className="col s5"><NotesList notes={notes} /></div>
            </div>
        </div>
    )
}


export default Home
