import React from 'react'

const NoteForm = () => {
    return (
        <div className="NoteForm">
        NoteForm
        </div>
    )
}

const styles = {
    NoteForm: {
        msFlexPositive: '1',
        flexGrow: '1',
        padding: '0 3rem',
      },
    formActions: {
        paddingTop: '1rem',
        marginLeft: '-2rem',
        display: '-ms-flexbox',
        display: 'flex',
        msFlexLinePack: 'center',
        alignContent: 'center',
      },
      button: {
        border: 'none',
        background: 'none',
        padding: '0',
      },
      buttonTypeSubmit: {
        backgroundColor: '#008bf8',
        borderRadius: '4px',
        color: '#fff',
        fontSize: '1.4rem',
        padding: '1rem',
      },
      buttonifa: {
        color: '#999',
        fontSize: '2rem',
        margin: '0',
      },
      form: {
        margin: '0 auto',
        maxWidth: '80rem',
      },
      inputNameTitle: {
        border: 'none',
        fontSize: '200%',
        fontFamily: '"Fauna One"',
        color: '#008bf8',
        fontWeight: '400',
        width: '100%',
        outline: 'none',
      },
      textarea: {
        borderColor: '#eee',
        width: '100%',
        height: 'calc(100vh - 140px)',
        fontSize: '1.3em',
      }
    }
      
    

export default NoteForm