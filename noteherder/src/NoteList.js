import React from 'react'

const NoteList = () => {
    return (
        <div className="NoteList">
        NoteList
        </div>
    )
}

const styles = {
    // @media (max-width: 800px) {
    //     .NoteList {
    //       width: 20rem;
    //     }
    //}
    h3: {
        color: '#999',
        textTransform: 'uppercase',
        fontSize: '2rem',
        fontFamily: 'Oxygen',
        fontWeight: '300',
        letterSpacing: '3px',
        margin: '20px 2rem',
      },
      ulNotes: {
        borderTop: '1px solid #eee',
        overflowY: 'scroll',
        height: 'calc(100vh - 72px)',
        listStyle: 'none',
        marginTop: '1em',
        padding: '0',
        width: '100%',
        color: '#999',
      },
    //   .NoteList ul#notes a,
    //   .NoteList ul#notes a:active,
    //   .NoteList ul#notes a:hover,
    //   .NoteList ul#notes a:link,
    //   .NoteList ul#notes a:visited {
    //     color: inherit;
    //     text-decoration: none;
    //   }
      ulNotesLi: {
        height: '100px',
        fontSize: '90%',
        cursor: 'pointer',
        overflow: 'hidden',
      },
    //   .NoteList ul#notes>a,
    //   .NoteList ul#notes>a * {
    //     -webkit-transition: background-color .1s ease-in-out, color .1s ease-in-out;
    //     -o-transition: background-color .1s ease-in-out, color .1s ease-in-out;
    //     transition: background-color .1s ease-in-out, color .1s ease-in-out;
    //   }
      ulNotesLiNote: {
        borderTop: '1px solid #eee',
        margin: '0 2rem',
        padding: '1rem 4px',
      },
      firstOfType: {
        borderTop: 'none',
      },
      liHover: {
        backgroundColor: '#008bf8',
      },
    //   .NoteList ul#notes li:hover,
    //   .NoteList ul#notes li:hover .note * {
    //     color: #fff!important;
    //     text-decoration: none !important;
    //   }
      liHoverNote: {
        borderColor: 'transparent;',
      },
      noteTitle: {
        color: '#4a4a4a',
        fontFamily: '"Fauna One"',
        fontSize: '120%',
        fontWeight: '400',
        whiteSpace: 'nowrap',
        overflowX: 'hidden',
        oTextOverflow: 'ellipsis',
        textOverflow: 'ellipsis',
      },
      noteBody: {
        height: '54px',
        overflow: 'hidden',
        marginTop: '.5rem',
      },
      noteBodyAll: {
        fontSize: '1em!important',
        margin: '0!important',
        padding: '0!important',
        color: '#999!important',
        background: 'none',
        border: 'none',
      },
      notesLiNote: {
        display: 'block',
        height: '100px',
        padding: '1em',
        textDecoration: 'none',
      }
    }
      

export default NoteList