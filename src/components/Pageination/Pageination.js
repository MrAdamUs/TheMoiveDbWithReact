import React from 'react';
import './Pageination.css';

const Pageination = (props) => {
    const pageLinks = [];

    for(let i = 1; i <= props.pages + 1; i++){
        let active = props.currentPage === i ? 'active' : '';

        pageLinks.push(<li className={`pagination__links" ${active}`} key={i} onClick={() => props.nextPage(i)}><a href="#">{i}</a></li>)
    }

    return (
        <div className="pagination">
            
                <ul className="pagination__items">
                    { props.currentPage > 1 ? <li className="pagination__links" onClick={() => props.nextPage(props.currentPage - 1)}><a href="#">Prev</a></li> : ''}
                    { pageLinks }
                    { props.currentPage < props.pages + 1  ? <li className={`pagination__links`}  onClick={() => props.nextPage(props.currentPage + 1)}><a href="#">Next</a></li> : ''}
                </ul>
          
        </div>
    )
   
}

export default Pageination;