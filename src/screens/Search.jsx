import React,{useState } from "react";


//mutable-> useRef
//immutable-> useState and onChange event

function Search(props){
    const [artist,setArtist] = useState("")

    const submitHandler = (e)=>{
        e.preventDefault();
        props.searchName(artist)
    }
    return(
       <div className="row">
          <div className="col-md-8 offset-md-2">
              <div className="card">
                <div className="card-body">
                    <div className="form-group mt-2">
                        <div className="input-group">
                            <input type="search" name="artist" id="artist" value={artist} className="form-control" placeholder="Search Artist Name" onChange={(e)=> setArtist(e.target.value)} required />
                            <button onClick={submitHandler} className="btn btn-success">
                                <i className="bi bi-search">
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
              </div>
            </div>
       </div>
    )
}
export default Search