import React from 'react';
import { useFormik } from 'formik';

const validate = (values) => {
  const errors = {};

  if (!values.roomId) {
    errors.roomId = 'Required';
  } else if (values.roomId.length > 4) {
    errors.roomId = 'Must be 4 characters or less';
  }

  if (!values.userName) {
    errors.userName = 'Required';
  } else if (values.userName.length > 15) {
    errors.userName = 'Must be 15 characters or less';
  }

  return errors;
};

const initialValues = {
  roomId: '',
  userName: '',
};

export function JoinBlock({ setIsShowBoard, socket }) {
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values) => {
      console.log(values);
      socket.emit('JOIN:ROOM', { ...values });
      setIsShowBoard(true);
    },
  });

  const onJoinClick = () => {
    if (formik.errors) {
      if (formik.errors.roomId) {
        alert(`Room ID: ${formik.errors.roomId}`);
      }
      if (formik.errors.userName) {
        alert(`User Name: ${formik.errors.userName}`);
      }
    }
  };

  return (
    <form className="join" onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="userName"
        placeholder="Name"
        value={formik.values.userName}
        onChange={formik.handleChange}
      />
      <input
        type="text"
        name="roomId"
        placeholder="Room ID"
        value={formik.values.roomId}
        onChange={formik.handleChange}
      />
      <button type="submit" className="button" onClick={onJoinClick}>
        Join
      </button>
    </form>
  );
}
