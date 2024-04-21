import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import getImagesFromApi from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

const ref = {
  form: document.querySelector('.js-form'),
  gallery: document.querySelector('.js-gallery'),
  btnLoadMore: document.querySelector('.btn-load-more'),
  loader: document.querySelector('.loader'),
};

let textForm;
let page = 1;
let perPage = 15; 

ref.form.addEventListener('submit', onSubmitFrom);
ref.btnLoadMore.addEventListener('clic', onClickLoadMore);

async function onSubmitForm(event) {
    event.preventDefault();
    showLoader();
    ref.gallery.innerHTML = '';
    

}