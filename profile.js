const members = [
  {
    name: "Nayeon",
    birth: "1995.09.22",
    img: "Nayeon.png"
  },
  {
    name: "Jeongyeon",
    birth: "1996.11.01",
    img: "Jeongyeon.png"
  },
  {
    name: "Momo",
    birth: "1996.11.09",
    img: "Momo.png"
  },
  {
    name: "Sana",
    birth: "1996.12.29",
    img: "Sana.png"
  },
  {
    name: "Jihyo",
    birth: "1997.02.01",
    img: "Jihyo.png"
  },
  {
    name: "Mina",
    birth: "1997.03.24",
    img: "Mina.png"
  },
  {
    name: "Dahyun",
    birth: "1998.05.28",
    img: "Dahyun.png"
  },
  {
    name: "Chaeyoung",
    birth: "1999.04.23",
    img: "Chaeyoung.png"
  },
  {
    name: "Tzuyu",
    birth: "1999.06.14",
    img: "Tzuyu.png"
  }
];

let index = 0;

function updateProfile() {
  document.getElementById("memberName").textContent = members[index].name;
  document.getElementById("memberBirth").textContent = members[index].birth;
  document.getElementById("memberImage").src = members[index].img;

}

function nextMember() {
  index = (index + 1) % members.length;
  updateProfile();
}

function prevMember() {
  index = (index - 1 + members.length) % members.length;
  updateProfile();
}
