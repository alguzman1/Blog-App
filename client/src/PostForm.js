import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap'
  }
}

const PostForm = ({onNameChange, handleSubmit, onCommentChange, onImageChange, onLocationChange}) => {
  return (
    <div style={styles.container} >
      <form>
        <div>
          <label> User Name </label>
          <input type='text' id='userName' placeholder='Create UserName' onChange={onNameChange} />
        </div>
        <div>
          <label> Image </label>
          <input type='text' id='img' placeholder='Create Image' onChange={onImageChange} />
        </div>
        <div>
          <label> Comment </label>
          <input type='text' id='comment' placeholder='Create Comment' onChange={onCommentChange} />
        </div>
        <div>
          <label> Location </label>
          <input type='text' id='location' placeholder='Create Location' onChange={onLocationChange} />
        </div>
        <button onClick={this.handleSubmit}> SUBMIT </button>
      </form>
    </div>
  )
}

PostForm.propTypes = {
  onNameChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onCommentChange: PropTypes.func.isRequired,
  onImageChange: PropTypes.func.isRequired,
  onLocationChange: PropTypes.func.isRequired
}

export default PostForm
