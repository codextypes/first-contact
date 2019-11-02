import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  backgroundDiv: {
    position: 'fixed',
    zIndex: 1,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'rgb(30,30,30,0.4)'
  },
  deleteModalDiv: {
    width: '40%',
    backgroundColor: '#fefefe',
    margin: '15% auto',
    padding: '30px',
    border: '1px solid #888'
  },
  modalButtonPrimary: {
    fontSize: '1.6rem',
    fontWeight: 'bold',
    width: '30%',
    height: '80x',
    border: '1px solid #999797',
    borderRadius: '5px',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: 'white',
      border: '1px solid #4152B3',
      color: '#4152B3'
    }
  },
  modalButtonSecondary: {
    fontSize: '1.6rem',
    fontWeight: 'bold',
    width: '30%',
    height: '80px',
    border: '1px solid #999797',
    borderRadius: '5px',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: 'white',
      border: '1px solid #F50058',
      color: '#F50058'
    }
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'space-between'
  }
});

class DeleteModal extends React.Component {
  state = {};
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.backgroundDiv}>
        <div className={classes.deleteModalDiv}>
          <div className={classes.buttonWrapper}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.props.delete}
              className={classes.modalButtonPrimary}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.props.closeButton}
              className={classes.modalButtonSecondary}
            >
              No
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(DeleteModal);




// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

// const useStyles = makeStyles(theme => ({
//   paper: {
//     position: 'absolute',
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

// export default function SimpleModal() {
//   const classes = useStyles();
//   // getModalStyle is not a pure function, we roll the style only on the first render
//   const [modalStyle] = React.useState(getModalStyle);
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <button type="button" onClick={handleOpen}>
//         Open Modal
//       </button>
//       <Modal
//         aria-labelledby="simple-modal-title"
//         aria-describedby="simple-modal-description"
//         open={open}
//         onClose={handleClose}
//       >
//         <div style={modalStyle} className={classes.paper}>
//           <h2 id="simple-modal-title">Text in a modal</h2>
//           <p id="simple-modal-description">
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </p>
//           <SimpleModal />
//         </div>
//       </Modal>
//     </div>
//   );
// }