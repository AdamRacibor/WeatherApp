const navigation = (function() {
  const form = document.querySelector('#section-1');
  const backBtns = document.querySelectorAll('.btn-back');
  const loadSection = document.querySelector('#load');
  const errorSection = document.querySelector('#error');
  let activeSection = 1;

  function changeSection() {
    let section = document.querySelector(`#section-${activeSection}`);
    section.classList.toggle("show");
    section.classList.toggle("hidden");
    activeSection++;
    section = document.querySelector(`#section-${activeSection}`);
    section.classList.toggle("hidden");
    section.classList.toggle("show");
  }

  function showErrorMsg() {
    load.classList.toggle('show');
    load.classList.toggle('hidden');
    error.classList.toggle('hidden');
    error.classList.toggle('show');
  }

  backBtns.forEach( btn => {
    btn.addEventListener('click', () => {
      window.location.reload(true);
    });
  });

  return {
    form: form,
    changeSection: changeSection,
    showErrorMsg: showErrorMsg,
  }
})();
