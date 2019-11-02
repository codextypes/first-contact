import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import IconButton from '@material-ui/core/IconButton';
import Navbar from "./Navbar";
import Modal from "./Modal";
import { CardActions } from "@material-ui/core";

const styles = theme => ({
    container: {
        width:"90%"
    },
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14,
    paddingLeft:10
  },
  pos: {
    marginBottom: 12
  },
  buttons: {
    cursor: "pointer"
  }
});

// const styles = theme => ({
//   root: {
//     flexGrow: 1
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary
//   },
//   buttons: {
//       cursor:"pointer"
//   }
// });

const UserCard = styled.div`
  display: flex;
  border: 2px solid;
  width: "50%";
  padding-top:20px;
  justify-content:space-between;
`;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "Bob",
          alias: "New Yorker"
        },
        {
          name: "Bill",
          alias: "Bronx"
        },
        {
          name: "Phil",
          alias: "Trenton"
        },
        {
          name: "Ray",
          alias: "Boston"
        },
        {
          name: "Rudy",
          alias: "Toronto"
        },
        {
          name: "Jake",
          alias: "Chicago"
        }
      ],

    };
  }

  toggleModal = () => {
    return <Modal/>
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <Navbar />
        <Card className={styles.card}>
          {users.map((user, i) => {
            return (
              <CardContent key={i}>
                <UserCard>
                  <Typography
                    className={styles.title}
                    variant="body2"
                    component="p"
                  >
                    {user.alias}
                  </Typography>
                  <Typography
                    className={styles.title}
                    // variant="body2"
                    // component="p"
                  >
                    {user.name}
                  </Typography>
                  <CardActions>
                  <IconButton onClick={this.toggleModal}>
                  <EditOutlinedIcon
                    className={styles.buttons}
                  />
                  </IconButton>
                  <IconButton>
                  <DeleteOutlineOutlinedIcon
                    className={styles.buttons}
                    onClick={() => console.log("clicked delete")}
                  />
                  </IconButton>
                  </CardActions>
                </UserCard>
              </CardContent>
            );
          })}
        </Card>
        {/* <Modal /> */}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Dashboard);
