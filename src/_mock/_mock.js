import { sub } from 'date-fns';
//
import { role } from './role';
import { email } from './email';
import { boolean } from './boolean';
import { company } from './company';
import { phoneNumber } from './phoneNumber';
import { fullAddress, country } from './address';
import { firstName, lastName, fullName } from './name';
import { title, sentence, description } from './text';
import { price, rating, age, percent } from './number';
import {
  enablingTitleName,
  enablingTitleTotalAmount,
  enablingTitleTotalSurface,
  departmentName,
  departmentAmount,
  departmentSurface,
  expenseCategorie,
  expenseCategorieValues,
  pieChartTitles
} from './enablingTitles';
// ----------------------------------------------------------------------

const _mock = {
  id: (index) => `e99f09a7-dd88-49d5-b1c8-1daf80c2d7b${index + 1}`,
  enablingTitles: {
    name: (index) => enablingTitleName[index],
    totalAmount: (index) => enablingTitleTotalAmount[index],
    totalSurface: (index) => enablingTitleTotalSurface[index],
    departments: {
      department: (index) => departmentName[index],
      amount: (index) => departmentAmount[index],
      surface: (index) => departmentSurface[index],
    },
    pieChartTitles: (index) => pieChartTitles[index],
    expenseCategorie: (index) => expenseCategorie[index],
    expenseCategorieValues: (index) => expenseCategorieValues[index],
  },
  email: (index) => email[index],
  phoneNumber: (index) => phoneNumber[index],
  time: (index) => sub(new Date(), { days: index, hours: index }),
  boolean: (index) => boolean[index],
  role: (index) => role[index],
  company: (index) => company[index],
  address: {
    fullAddress: (index) => fullAddress[index],
    country: (index) => country[index],
  },
  name: {
    firstName: (index) => firstName[index],
    lastName: (index) => lastName[index],
    fullName: (index) => fullName[index],
  },
  text: {
    title: (index) => title[index],
    sentence: (index) => sentence[index],
    description: (index) => description[index],
  },
  number: {
    percent: (index) => percent[index],
    rating: (index) => rating[index],
    age: (index) => age[index],
    price: (index) => price[index],
  },
  image: {
    cover: (index) => `https://minimal-assets-api-dev.vercel.app/assets/images/covers/cover_${index + 1}.jpg`,
    feed: (index) => `https://minimal-assets-api-dev.vercel.app/assets/images/feeds/feed_${index + 1}.jpg`,
    product: (index) => `https://minimal-assets-api-dev.vercel.app/assets/images/products/product_${index + 1}.jpg`,
    avatar: (index) => `https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_${index + 1}.jpg`,
  },
};

export default _mock;
