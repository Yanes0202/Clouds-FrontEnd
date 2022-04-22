import classes from "./Profile.module.css";

export default function Profile() {
    const parsedData = JSON.parse(sessionStorage.getItem("userData"));
    const userName = JSON.parse(parsedData).userName;
    const userLastName = JSON.parse(parsedData).userLastName;
    const userPhoneNumber = JSON.parse(parsedData).phoneNumber;
    const userDayOfBirth = JSON.parse(parsedData).dayOfBirth;
  return (
    <section className={classes.main}>
      <div className={classes.br}>
        <div className={classes.background}>
          <img
            className={classes.background}
            src="https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="userBackGround"
          />
        </div>
      </div>

      <div className={classes.base}>
        <div className={classes.userImage}>
          <img
            src="https://scontent-frx5-1.xx.fbcdn.net/v/t39.30808-1/240825140_2168476116623169_6016757052757615585_n.jpg?stp=dst-jpg_p200x200&_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=m1_kH6HDttcAX_jTpMk&_nc_ht=scontent-frx5-1.xx&oh=00_AT8Z-c-yjv_fqeysgYRYWn8eKCenUB8ZKQPJZH_3a3AoJw&oe=6267037B"
            alt="user Image"
            className={classes.userImage}
          />
        </div>
        <span className={classes.info}>
          {userName + " " + userLastName}
          <br />
          Ileś tam znajomych
        </span>
        <div className={classes.actions}>
          <button>Edytuj Profil</button>
        </div>
      </div>

      <div className={classes.information}>Informacje o profilu:</div>
      <br />
      <span>Phone Number: {" " + userPhoneNumber}</span>
      <br />
      <span>Day of Birth: {" " + userDayOfBirth}</span>
    </section>
  );
}
