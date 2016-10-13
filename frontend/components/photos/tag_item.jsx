import React from 'react';

const TagItem = (props) => {

  let deleteButton;
  if(props.isUsersPhoto){
      deleteButton = <i className="material-icons delete-tag" onClick={ props.handleDelete }>close</i>;
    }
  return(
    <li className= "tag" onClick={ props.handleSearch }>
      { props.tagName }
      <span>
        { deleteButton }
      </span>
    </li>
  );
};

export default TagItem;
