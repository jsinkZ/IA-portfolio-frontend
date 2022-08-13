import React from "react"
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import classes from './Image.module.scss'
import adress from "../../config";

const Image = ({
  images,
  deleteImage,
  isEditing,
}) => {

  return (
    <>
      { (isEditing ? (
        images.map((imgAdress, index) => {

          const styleImg = {
            backgroundImage: `url(${adress}${imgAdress})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            userSelect: 'none',
          }

          return (
          <div className={classes.addImageBlock} style={styleImg}>
            <IconButton onClick={() => deleteImage(index)} >
              <DeleteIcon sx={{fontSize: "120px"}} color='error'/>
            </IconButton>
          </div>
          )
      })) : '' )}
    </>
    )
}

export default Image