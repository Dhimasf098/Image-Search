// ROOT COMPONENTS
import React from 'react'
import SearchBar from './SearchBar.jsx'
import axios from 'axios'
import ImagesList from './ImagesList.jsx'

// Membuat komponen berbasis class
class App extends React.Component {
    state = {images: []}

    onSearch = (keyword) => {
        // Request image
        axios.get(
            'https://api.unsplash.com/search/photos',
            {
                headers: {
                    Authorization: 'Client-ID A-c3T4tZE8CTC4eJ0liT89vki1JMBaUmHO2zJ9RJ-OY'
                },

                params: {
                    query: keyword,
                    per_page: 15
                }
            }
            // respon dari request ('res') disimpan ke 'state'
        ).then((res) => {
            this.setState({ images: res.data.results})
        })
    }

    // Function yang wajib ada, apa yang ingin kita tampilkan, akan kita tulis di sini
    // Function render hanya boleh me-return satu buah tag html
    render() {
        return (
            // JSX adalah syntax pemanis untuk membuat html
            <div className='container'>
                <h1 className='text-center mt-3'>Image Search</h1>
                {/* /* asd -> property */}
                <SearchBar onSearch={this.onSearch} />
                <ImagesList images={this.state.images}/>
            </div>
        )
    }
}

// Karena akan di import di file lain
export default App