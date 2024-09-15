export const ValidMail = (mail) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(mail);
};


//console.log(ValidMail('josueaoga0@gmail.com'));
