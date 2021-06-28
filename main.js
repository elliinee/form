

window.onload = function() {

  const wrapperInit = () => {
    /** 
      * Обёртка
      */
    const wrapper = document.createElement('div');
    wrapper.classList.add('form_wrapper');

    const title = document.createElement('div');
    const titleText = "Бланк для Банка материальных желаний"
    title.innerHTML = titleText;

    const titleName = document.createElement('div');
    const titleNameText = "Как Вас зовут?"
    titleName.classList.add('wrap_title');
    titleName.innerHTML = titleNameText;

    const titleData = document.createElement('div');
    const titleDataText = "Ваши данные"
    titleData.classList.add('wrap_title');
    titleData.innerHTML = titleDataText;

    const titleWish = document.createElement('div');
    const titleWishText = "Ваше желание"
    titleWish.classList.add('wrap_title');
    titleWish.innerHTML = titleWishText;

    const titleContact = document.createElement('div');
    const titleContactText = "Ваши контактные данные"
    titleContact.classList.add('wrap_title');
    titleContact.innerHTML = titleContactText;

    const form = document.querySelector('.form');

    form.appendChild(wrapper);
    wrapper.appendChild(title);
    const formTag = document.createElement('form');
    formTag.setAttribute('action', 'http://wishbank.com');
    formTag.setAttribute('onsubmit', 'sumbitFunc()');
    formTag.setAttribute('method', 'POST')
    wrapper.appendChild(formTag);

    const formWrapper = document.createElement('div');
    formWrapper.classList.add('inputs_wrapper');
    formTag.appendChild(formWrapper);

    const personWrapper = document.createElement('div');
    personWrapper.classList.add('inputs_wrapper');
    formTag.appendChild(personWrapper);

    const wishWrapper = document.createElement('div');
    wishWrapper.classList.add('inputs_wrapper');
    formTag.appendChild(wishWrapper);

    const contactWrapper = document.createElement('div');
    contactWrapper.classList.add('inputs_wrapper');
    formTag.appendChild(contactWrapper);


    /** 
      * Элементы формы 
      */

    const inputLastName = {
      "label": "Фамилия*",
      "type": "text",
      "id": "last_name",
      "name": "last_name",
      "placeholder": "Введите фамилию"
      };

    const inputFirstName = {
      "label": "Имя*",
      "type": "text",
      "id": "first_name",
      "name": "first_name",
      "placeholder": "Введите имя"
      };

    const inputPatronymic = {
      "label": "Отчество",
      "type": "text",
      "id": "patronymic",
      "name": "patronymic",
      "placeholder": "Введите отчество"
      };

    const inputBirthDate = {
      "label": "Дата рождения",
      "type": "date",
      "id": "birthdate",
      "min": "01-01-1970",
      "max": "31-12-2001"
    }

    const inputBirthTime = {
      "label": "Время рождения",
      "type": "time",
      "id": "birthtime",
      "name": "birthtime"
    }

    const inputGender = {
      "label": "Ваш пол",
      "id": "gender",
      "name": "gender"
    }

    const inputSum = {
      "label": "Нужная сумма*",
      "type": "number",
      "id": "sum",
      "name": "sum",
      "placeholder": "Введите сумму"
    }

    const inputGoal = {
      "label": "Цель*",
      "type": "text",
      "id": "goal",
      "name": "goal",
      "placeholder": "Введите цель"
    }

    const inputNumber = {
      "label": "Номер мобильного телефона",
      "type": "tel",
      "id": "tel",
      "name": "tel",
      "placeholder": "Ваш номер"
    }

    const inputEmail = {
      "label": "Электронная почта*",
      "type": "email",
      "id": "email",
      "name": "email",
      "placeholder": "Ваш e-mail"
    }

    const submit = {
      "url": "http://wishbank.com",
      "text": "Отправить желание"
    }

    /** 
      * Инпуты 
      */
    const nameInputs = () => {
      const inputLastNameTag = document.createElement('input');
      inputLastNameTag.classList.add('input');
      inputLastNameTag.setAttribute('required', true);
      const inputLastNameLabel = document.createElement('label');

      const inputFirstNameTag = document.createElement('input');
      inputFirstNameTag.classList.add('input');
      inputFirstNameTag.setAttribute('required', true);
      const inputFirstNameLabel = document.createElement('label');

      const inputPatronymicTag = document.createElement('input');
      inputPatronymicTag.classList.add('input');
      const inputPatronymicLabel = document.createElement('label');

      inputLastNameLabel.innerHTML = inputLastName.label;
      inputLastNameLabel.setAttribute('for', inputLastName.name);
      inputLastNameTag.type = inputLastName.type;

      inputFirstNameLabel.innerHTML = inputFirstName.label;
      inputFirstNameLabel.setAttribute('for', inputFirstName.name);
      inputFirstNameTag.type = inputFirstName.type;

      inputPatronymicLabel.innerHTML = inputPatronymic.label;
      inputPatronymicLabel.setAttribute('for', inputPatronymic.name);
      inputPatronymicTag.type = inputPatronymic.type;

      inputLastNameTag.setAttribute('id', inputLastName.id);
      inputLastNameTag.placeholder = inputLastName.placeholder;

      inputFirstNameTag.setAttribute('id', inputFirstName.id);
      inputFirstNameTag.placeholder = inputFirstName.placeholder;

      inputPatronymicTag.setAttribute('id', inputPatronymic.id);
      inputPatronymicTag.placeholder = inputPatronymic.placeholder;

      formWrapper.appendChild(titleName);

      formWrapper.appendChild(inputLastNameLabel);
      formWrapper.appendChild(inputLastNameTag);

      formWrapper.appendChild(inputFirstNameLabel);
      formWrapper.appendChild(inputFirstNameTag);

      formWrapper.appendChild(inputPatronymicLabel);
      formWrapper.appendChild(inputPatronymicTag);
    };
    
    const personInputs = () => {
      const inputBirthDateTag = document.createElement('input');
      inputBirthDateTag.classList.add('input');
      const inputBirthDateLabel = document.createElement('label');

      const inputBirthTimeTag = document.createElement('input');
      inputBirthTimeTag.classList.add('input');
      const inputBirthTimeLabel = document.createElement('label');

      const inputGenderTag = document.createElement('select');
      const inputGenderFemale = document.createElement('option');
      const inputGenderMale = document.createElement('option');
      const inputGenderChoose = document.createElement('option');
      const inputGenderLabel = document.createElement('label');

      inputBirthDateLabel.innerHTML = inputBirthDate.label;
      inputBirthDateLabel.setAttribute('for', inputBirthDate.name);
      inputBirthDateTag.type = inputBirthDate.type;

      inputBirthTimeLabel.innerHTML = inputBirthTime.label;
      inputBirthTimeLabel.setAttribute('for', inputBirthTime.name);
      inputBirthTimeTag.type = inputBirthTime.type;

      inputGenderTag.type = inputGender.type;

      inputBirthDateTag.setAttribute('id', inputBirthDate.id);
      inputBirthTimeTag.setAttribute('id', inputBirthTime.id);

      inputGenderTag.setAttribute('id', inputGender.id);
      inputGenderLabel.innerHTML = inputGender.label;
      inputGenderFemale.innerHTML = "Женский";
      inputGenderMale.innerHTML = "Мужской";
      inputGenderChoose.innerHTML = "Выберите пол";

      personWrapper.appendChild(titleData);

      personWrapper.appendChild(inputBirthDateLabel);
      personWrapper.appendChild(inputBirthDateTag);

      personWrapper.appendChild(inputBirthTimeLabel);
      personWrapper.appendChild(inputBirthTimeTag);

      personWrapper.appendChild(inputGenderLabel);
      personWrapper.appendChild(inputGenderTag);
      inputGenderTag.appendChild(inputGenderChoose);
      inputGenderTag.appendChild(inputGenderFemale);
      inputGenderTag.appendChild(inputGenderMale);
      
      
    };

    const wishInputs = () => {
      const inputSumTag = document.createElement('input');
      inputSumTag.classList.add('input');
      const inputSumLabel = document.createElement('label');

      const inputGoalTag = document.createElement('input');
      inputGoalTag.classList.add('input');
      const inputGoalLabel = document.createElement('label');

      inputSumLabel.innerHTML = inputSum.label;
      inputSumLabel.setAttribute('for', inputSum.name);
      inputSumTag.type = inputSum.type;

      inputGoalLabel.innerHTML = inputGoal.label;
      inputGoalLabel.setAttribute('for', inputGoal.name);
      inputGoalTag.type = inputGoal.type;

      inputSumTag.setAttribute('id', inputSum.id);
      inputSumTag.placeholder = inputSum.placeholder;

      inputGoalTag.setAttribute('id', inputGoal.id);
      inputGoalTag.placeholder = inputGoal.placeholder;

      wishWrapper.appendChild(titleWish)

      wishWrapper.appendChild(inputSumLabel);
      wishWrapper.appendChild(inputSumTag);

      wishWrapper.appendChild(inputGoalLabel);
      wishWrapper.appendChild(inputGoalTag);

    };

    const contactInputs = () => {
      const inputNumberTag = document.createElement('input');
      inputNumberTag.classList.add('input');
      const inputNumberLabel = document.createElement('label');

      const inputEmailTag = document.createElement('input');
      inputEmailTag.classList.add('input');
      inputEmailTag.setAttribute('required', true);
      const inputEmailLabel = document.createElement('label');

      inputNumberLabel.innerHTML = inputNumber.label;
      inputNumberLabel.setAttribute('for', inputNumber.name);
      inputNumberTag.type = inputNumber.type;

      inputEmailLabel.innerHTML = inputEmail.label;
      inputEmailLabel.setAttribute('for', inputEmail.name);
      inputEmailTag.type = inputEmail.type;

      inputNumberTag.setAttribute('id', inputNumber.id);
      inputNumberTag.placeholder = inputNumber.placeholder;

      inputEmailTag.setAttribute('id', inputEmail.id);
      inputEmailTag.placeholder = inputEmail.placeholder;

      contactWrapper.appendChild(titleContact);

      contactWrapper.appendChild(inputNumberLabel);
      contactWrapper.appendChild(inputNumberTag);

      contactWrapper.appendChild(inputEmailLabel);
      contactWrapper.appendChild(inputEmailTag);

    };

      /** 
      * Кнопка
      */
    const btn = () => {
      const button = document.createElement('submit');
      const buttonWrapper = document.createElement('div');
      buttonWrapper.classList.add('button_wrapper');
      button.classList.add('button');
      button.innerHTML = submit.text;

      formTag.appendChild(buttonWrapper);
      buttonWrapper.appendChild(button);

      /** 
      * Проверка заполненности (имя, фамилия, сумма, желание и электронная почта)
      */
      const submitFunc = () => {
        button.addEventListener('click', function() {
          if (document.forms[0].first_name.value === "" 
              && document.forms[0].last_name.value === ""
              && document.forms[0].email.value === ""
              && document.forms[0].sum.value === ""
              && document.forms[0].goal.value === "") {
            alert ('Вы заполнили не все поля!');
          } else {
            alert('Ваше желание отправлено! Ожидайте исполнения✨');
          }
        });
      };
      submitFunc();
    }

    const colorBtn = () => {
      const color = document.createElement('a');
      color.innerHTML = 'Сменить тему';

      form.appendChild(color);

      color.addEventListener('click', function() {
        form.classList.toggle('dark');
      });
    }
    
    colorBtn();
    nameInputs();
    personInputs();
    wishInputs();
    contactInputs();
    btn();
    
  }
  
  wrapperInit();
}
