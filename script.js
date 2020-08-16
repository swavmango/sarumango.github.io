var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName('custom-select');
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName('select')[0];
  console.log(selElmnt);
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement('DIV');
  a.setAttribute('class', 'select-selected');
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement('DIV');
  b.setAttribute('class', 'select-items select-hide');
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement('DIV');
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener('click', function(e) {
      /*when an item is clicked, update the original select box,
      and the selected item:*/
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName('select')[0];
      console.log(this.innerHTML);
      x = this.innerHTML;
      if (x == 'Adult Fiction') {
        document.getElementById('science-fiction').style.display = 'none';
        document.getElementById('young-adult-fiction').style.display = 'none';
        document.getElementById('adult-fiction').style.display = 'block';
      }
      if (x == 'Science Fiction') {
        document.getElementById('adult-fiction').style.display = 'none';
        document.getElementById('young-adult-fiction').style.display = 'none';
        document.getElementById('science-fiction').style.display = 'block';
      }
      if (x == 'Young Adult Fiction') {
        document.getElementById('adult-fiction').style.display = 'none';
        document.getElementById('science-fiction').style.display = 'none';
        document.getElementById('young-adult-fiction').style.display = 'block';
      }
      if (x == 'All genre') {
        document.getElementById('adult-fiction').style.display = 'block';
        document.getElementById('science-fiction').style.display = 'block';
        document.getElementById('young-adult-fiction').style.display = 'block';
      }
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName('same-as-selected');
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute('class');
          }
          this.setAttribute('class', 'same-as-selected');
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener('click', function(e) {
    /*when the select box is clicked, close any other select boxes,
    and open/close the current select box:*/
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle('select-hide');
    this.classList.toggle('select-arrow-active');
  });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName('select-items');
  y = document.getElementsByClassName('select-selected');
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove('select-arrow-active');
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add('select-hide');
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener('click', closeAllSelect);

function ValidateEmail() {
  var email = document.newsform.email.value;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(mailformat)) {
    return true;
  } else {
    alert('You have entered an invalid email address!');
    document.newsform.email.focus();
    return false;
  }
}

function validate() {
  var name = document.contactform.name.value;
  var email = document.contactform.email.value;
  var address = document.contactform.address.value;
  var city = document.contactform.city.value;
  var postal = document.contactform.postal.value;

  if (name == null || name == '') {
    alert("Name can't be blank");
    document.contactform.name.focus();
    return false;
  } else if (email == null || email == '') {
    alert("Email can't be blank");
    document.contactform.email.focus();
    return false;
  } else if (address == null || address == '') {
    alert("Address can't be blank");
    document.contactform.address.focus();
    return false;
  } else if (postal == null || postal == '') {
    alert("Postal Code can't be blank");
    document.contactform.postal.focus();
    return false;
  } else if (city == null || city == '') {
    alert("City can't be blank");
    document.contactform.city.focus();
    return false;
  }
}
function orderPrCheck() {
  if (document.getElementById('purpose-3').checked)
    document.getElementById('orderno').style.display = 'block';
  else document.getElementById('orderno').style.display = 'none';
}
