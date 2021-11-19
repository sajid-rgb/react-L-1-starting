import React, { useState } from 'react';
import firebase from 'firebase';
import "firebase/firestore";
import axios from 'axios';
const Admin = () => {
    const [name, setName] = useState('');
    const [des, setDes] = useState('');
    const [image, setImage] = useState('');
    const firebaseConfig = {
        apiKey: "AIzaSyBved91ONO9ksR8wmY3SQ1mEAeT4Gk1nxI",
        authDomain: "fir-app-c559f.firebaseapp.com",
        projectId: "fir-app-c559f",
        storageBucket: "fir-app-c559f.appspot.com",
        messagingSenderId: "115284201793",
        appId: "1:115284201793:web:4b3f1437f85578c6cc51c0"
    };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    // const handleImageUpload = (e) => {
    //     const storageRef = firebase.storage().ref();
    //     const file = e.target.files[0];
    //     const name = file.name;
    //     const metadata = { contentType: file.type };
    //     const task = storageRef.child(name).put(file, metadata);
    //     task.on('state_changed',
    //         function progress(snapshot) {
    //             var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //             console.log('Upload is ' + percentage + '% done');
    //         },
    //         function error(err) {
    //             console.log(err);
    //         },
    //         function complete() {
    //             console.log('Upload complete');
    //         }
    //     );
    // }

    const handleImageUpload = (e) => {
        const imageData = new FormData()
        imageData.set('key', '1548ccff8858fae73955ddac24bb941e')
        imageData.set('image', e.target.files[0])
        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(res => {
                setImage(res.data.data.url)
            })
            .catch(err => { console.log(err) })


    }
    const handleAddToDb = async () => {
        const countryData = {
            name: name,
            description: des,
            image: image
        }
        try {
            if (name && des && image !== '') {
                const result = await firebase.firestore().collection('countries').add(countryData)
                if (result) {
                    alert('Added to db')
                    setName('')
                    setDes('')
                }
            } else {
                alert('Please fill all the fields')
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <input type="text" placeholder="Enter country name" className="mt-3" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Enter country description" className="mt-3" value={des} onChange={(e) => setDes(e.target.value)} />
            <input type="file" placeholder="Enter image" className="mt-3" onChange={handleImageUpload} />
            <button class="btn btn-primary" onClick={handleAddToDb}>Add to db</button>
        </div>
    );
};

export default Admin;