import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import AddChapter from './Addchapter';
import ReactHtmlParser from 'react-html-parser';

function Chapters(chapters) {

    const chapters_data = chapters.chapters;



    if (chapters !== []) {
        return (
            <Fragment>






                <div className='container-sm  '>

                    {chapters_data.map(chapter => (

                        <div key={chapter.id} className="row">
                            <div className=" mb-3 my-1" style={{
                                display: "block",
                                width: " 20px",
                                'border-radius': " 50px 20px",
                                background: "#3CB371",

                            }}> </div>
                            <div className="col-11">


                                <div className=' card gedf-card border-secondary mb-3' >
                                    <div className="card-header" id={`heading${chapter.order}`}>
                                        <h2 >
                                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target={`#collapse${chapter.order}`} aria-expanded="false" aria-controls={`collapse${chapter.order}`}>
                                                <div>{chapter.title}</div>
                                            </button>
                                        </h2>
                                    </div>


                                    <div id={`collapse${chapter.order}`} className="collapse " aria-labelledby={`heading${chapter.order}`} >



                                        <div className="card-body mx-4">

                                            <div>{ReactHtmlParser(chapter.content)}</div>

                                        </div>




                                    </div>
                                    <div className="card-footer   ">
                                        <div className="d-flex justify-content-between m-4 ">

                                            <div className="d-inline p-2 bg-dark text-white">created at  &nbsp; {chapter.created_at}</div>


                                            {chapter.quiz[0] !== undefined ?
                                                <Link to={`/quiz/${chapter.quiz[0]}`}><div key={chapter.quiz[0]} className="d-inline btn p-3  text-white" style={{

                                                    'border-radius': " 50px 20px",
                                                    background: "#3CB371",

                                                }}> Take the quiz </div></Link>

                                                : ''}

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}</div>







            </Fragment >
        )
    } else {
        return null;
    }
}
export default Chapters;