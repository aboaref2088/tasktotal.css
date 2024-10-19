




// // let price = document.getElementById('price');
// // let taxes = document.getElementById('taxes');
// // let ads = document.getElementById('ads');
// // let total = document.getElementById('total');
// // let count = document.getElementById('count');
// // let discount = document.getElementById('discount');
// // let category = document.getElementById('category');
// // let submit = document.getElementById('submit');
// // let title = document.getElementById('title');

// // let mood = 'create';
// // let tmp;
// // let datapro = [];

// // // دالة لإضافة المنتج وعرض البيانات في الجدول
// // submit.addEventListener('click', function() {
// //     let newproduct = {
// //         title: title.value.toLowerCase(), // تحويل العنوان إلى سمول
// //         price: parseFloat(price.value),
// //         taxes: parseFloat(taxes.value),
// //         ads: parseFloat(ads.value),
// //         discount: parseFloat(discount.value),
// //         total: parseFloat(total.innerHTML),
// //         count: parseInt(count.value),
// //         category: category.value.toLowerCase(), // تحويل الفئة إلى سمول
// //     };


// //     if (title.  value != ''
// //         &&price.value !=''
// //         && category.value !=''
        
// //     ) {

// //     if (mood === 'create') {
// //         if (newproduct.count > 1) {
// //             for (let i = 0; i < newproduct.count; i++) {
// //                 datapro.push({ ...newproduct });
// //             }
// //         } else {
// //             datapro.push(newproduct);
// //         }
// //     } else {
// //         datapro[tmp] = newproduct;
// //         mood = 'create';  // إعادة تعيين الوضع بعد التحديث
// //         submit.innerHTML = 'create'; // إعادة نص الزر إلى "إنشاء"
// //         count.style.display = 'block'; // إعادة عرض حقل العدد
        
// //     }
// // clearInputs()
// // }



// //     // تخزين البيانات في localStorage
// //     localStorage.setItem('data', JSON.stringify(datapro));

// //     // تحديث الجدول لعرض البيانات الجديدة
// //     showData();
// //     clearInputs()

// //     // مسح الحقول بعد الإضافة
// //     // clearInputs();

// //     // إعادة لون الزر إلى الأحمر
// //     total.style.background = 'red'; 
// //     total.style.color = 'white';
// // });

// // // دالة لعرض البيانات في الجدول
// // function showData() {
// //     let table = '';
// //     for (let i = 0; i < datapro.length; i++) {
// //         table += `
// //         <tr>
// //             <td>${i + 1}</td>
// //             <td>${datapro[i].title}</td>
// //             <td>${datapro[i].price}</td>
// //             <td>${datapro[i].taxes}</td>
// //             <td>${datapro[i].ads}</td>
// //             <td>${datapro[i].discount}</td>
// //             <td>${datapro[i].total}</td>
// //             <td>${datapro[i].category}</td>
// //             <td><button onclick="updateData(${i})">تحديث</button></td>
// //             <td><button onclick="deleteData(${i})">حذف</button></td>
// //         </tr>`;
// //     }
// //     document.getElementById('tbody').innerHTML = table;

// //     // زر لمسح الكل
// //     let btnDelete = document.getElementById('ddeletAll');
// //     if (datapro.length > 0) {
// //         btnDelete.innerHTML = `<button onclick="deleteAll()">حذف الكل ( ${datapro.length}) </button>`;
// //     } else {
// //         btnDelete.innerHTML = '';
// //     }
// // }

// // showData();

// // // دالة لمسح الحقول
// // function clearInputs() {
// //     title.value = '';
// //     price.value = '';
// //     taxes.value = '';
// //     ads.value = '';
// //     discount.value = '';
// //     count.value = '';
// //     category.value = '';
// //     total.innerHTML = '';
// // }

// // // دالة لحذف البيانات
// // function deleteData(index) {
// //     datapro.splice(index, 1);
// //     localStorage.setItem('data', JSON.stringify(datapro));
// //     showData();
// // }

// // // استرجاع البيانات من localStorage عند تحميل الصفحة
// // if (localStorage.getItem('data') !== null) {
// //     datapro = JSON.parse(localStorage.getItem('data'));
// // }

// // // عرض البيانات المخزنة عند تحميل الصفحة
// // showData();

// // // دالة لمسح الكل 
// // function deleteAll() {
// //     datapro = [];
// //     localStorage.clear();
// //     showData();
// // }

// // // تعديل المنتجات
// // function updateData(i) {
// //     title.value = datapro[i].title;
// //     price.value = datapro[i].price;
// //     discount.value = datapro[i].discount;
// //     taxes.value = datapro[i].taxes;
// //     ads.value = datapro[i].ads;
// //     getTotal();
// //     count.style.display = 'none';
// //     category.value = datapro[i].category;
// //     submit.innerHTML = 'تحديث';  
// //     mood = 'update';              
// //     tmp = i;
// //     scroll({
// //         top: 0, 
// //         behavior: 'smooth'
// //     });
// // }

// // // دالة لحساب المجموع
// // function getTotal() {
// //     if (price.value !== '' && taxes.value !== '' && ads.value !== '' && discount.value !== '') {
// //         let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
// //         total.innerHTML = result;
// //         total.style.background = '#040'; // لون أخضر عند وجود القيم
// //         total.style.color = 'white'; // لون النص أبيض
// //     } else {
// //         total.innerHTML = ''; // مسح القيمة
// //         total.style.background = 'red'; // تغيير لون الخلفية إلى الأحمر
// //         total.style.color = 'white'; // لون النص أبيض
// //     }
// // }

// // // استدعاء الدالة عند الحاجة
// // getTotal();

// // // searchالبحث  tiotle 
// // let searchMood = 'title';
// // function getSearchMood(id) {
// //     let search=  document.getElementById('search');

// // if  (id === 'searchTitle') {
// //     searchMood=  'title';
// //     search.placeholder = '    search By Title';
// // }  else   {
// //     searchMood=   'category';
// //     search.placeholder = '    Search By Category  ';

// // }
// //     search.focus();
// //     search. value='';
// //     showData();
// // }
// // // تاني خطوة في البحث
// // function searchDate(value) {
// //     let table= '';
// //     value = value.toLowerCase(); // تحويل قيمة البحث إلى سمول
// //     if(searchMood=== 'title'){
// // for(  let i = 0; i < datapro.length; i++) {
// //     if(datapro[i].title.includes (value)){

// // // عرض النتيجة  البحث
// // table += `
// // <tr>
// //     <td>${i + 1}</td>
// //     <td>${datapro[i].title}</td>
// //     <td>${datapro[i].price}</td>
// //     <td>${datapro[i].taxes}</td>
// //     <td>${datapro[i].ads}</td>
// //     <td>${datapro[i].discount}</td>
// //     <td>${datapro[i].total}</td>
// //     <td>${datapro[i].category}</td>
// //     <td><button onclick="updateData(${i})">تحديث</button></td>
// //     <td><button onclick="deleteData(${i})">حذف</button></td>
// // </tr>`;

// //     }

// // }

// //     }else{

// // // للبحث عن ال category
// // for(  let i = 0; i < datapro.length; i++) {
// //     if(datapro[i].category.includes(value)){

// // // عرض النتيجة  البحث
// // table += `
// // <tr>
// //     <td>${i + 1}</td>
// //     <td>${datapro[i].title}</td>
// //     <td>${datapro[i].price}</td>
// //     <td>${datapro[i].taxes}</td>
// //     <td>${datapro[i].ads}</td>
// //     <td>${datapro[i].discount}</td>
// //     <td>${datapro[i].total}</td>
// //     <td>${datapro[i].category}</td>
// //     <td><button onclick="updateData(${i})">تحديث</button></td>
// //     <td><button onclick="deleteData(${i})">حذف</button></td>
// // </tr>`;

// //     }
// // }
// // }
// //     document.getElementById('tbody').innerHTML = table;

// // }











// let price = document.getElementById('price');
// let taxes = document.getElementById('taxes');
// let ads = document.getElementById('ads');
// let total = document.getElementById('total');
// let count = document.getElementById('count');
// let discount = document.getElementById('discount');
// let category = document.getElementById('category');
// let submit = document.getElementById('submit');
// let title = document.getElementById('title');

// let mood = 'create';
// let tmp;
// let datapro = JSON.parse(localStorage.getItem('data')) || []; // استرجاع البيانات أو تهيئة مصفوفة فارغة
// let invoiceData = []; // قائمة الفاتورة

// // دالة لإضافة المنتج وعرض البيانات في الجدول
// submit.addEventListener('click', function() {
//     let newproduct = {
//         title: title.value.toLowerCase(),
//         price: parseFloat(price.value),
//         taxes: parseFloat(taxes.value),
//         ads: parseFloat(ads.value),
//         discount: parseFloat(discount.value),
//         total: parseFloat(total.innerHTML),
//         count: parseInt(count.value),
//         category: category.value.toLowerCase(),
//     };

//     if (title.value != '' && price.value != '' && category.value != '') {
//         if (mood === 'create') {
//             if (newproduct.count > 1) {
//                 for (let i = 0; i < newproduct.count; i++) {
//                     datapro.push({ ...newproduct });
//                 }
//             } else {
//                 datapro.push(newproduct);
//             }
//         } else {
//             datapro[tmp] = newproduct;
//             mood = 'create';
//             submit.innerHTML = 'create';
//             count.style.display = 'block';
//         }

//         clearInputs();
//         localStorage.setItem('data', JSON.stringify(datapro)); // تخزين البيانات في localStorage
//         showData();
//         total.style.background = 'red';
//         total.style.color = 'white';
//     }
// });

// // دالة لعرض البيانات في الجدول
// function showData() {
//     let table = '';
//     for (let i = 0; i < datapro.length; i++) {
//         table += `
//         <tr>
//             <td>${i + 1}</td>
//             <td>${datapro[i].title}</td>
//             <td>${datapro[i].price}</td>
//             <td>${datapro[i].taxes}</td>
//             <td>${datapro[i].ads}</td>
//             <td>${datapro[i].discount}</td>
//             <td>${datapro[i].total}</td>
//             <td>${datapro[i].category}</td>
//             <td><button onclick="updateData(${i})">تحديث</button></td>
//             <td><button onclick="deleteData(${i})">حذف</button></td>
//         </tr>`;
//     }
//     document.getElementById('tbody').innerHTML = table;

//     let btnDelete = document.getElementById('ddeletAll');
//     if (datapro.length > 0) {
//         btnDelete.innerHTML = `<button onclick="deleteAll()">حذف الكل ( ${datapro.length}) </button>`;
//     } else {
//         btnDelete.innerHTML = '';
//     }
// }

// // دالة لإتمام عملية البيع
// document.getElementById('completeSale').addEventListener('click', function() {
//     if (invoiceData.length > 0) {
//         invoiceData.forEach(item => {
//             datapro = datapro.filter(data => data.title !== item.title); // حذف من المخزون
//         });

//         localStorage.setItem('data', JSON.stringify(datapro)); // تحديث المخزون في التخزين المحلي
//         showData(); // تحديث عرض البيانات
//         alert('تم إتمام البيع بنجاح!');
//         invoiceData = []; // مسح قائمة الفاتورة
//         showInvoiceData(); // تحديث عرض الفاتورة
//     } else {
//         alert('لا توجد أصناف في الفاتورة.');
//     }
// });

// // دالة لمسح الحقول
// function clearInputs() {
//     title.value = '';
//     price.value = '';
//     taxes.value = '';
//     ads.value = '';
//     discount.value = '';
//     count.value = '';
//     category.value = '';
//     total.innerHTML = '';
// }

// // دالة لحذف البيانات
// function deleteData(index) {
//     datapro.splice(index, 1);
//     localStorage.setItem('data', JSON.stringify(datapro)); // تحديث localStorage
//     showData();
// }

// // استرجاع البيانات من localStorage عند تحميل الصفحة
// if (localStorage.getItem('data') !== null) {
//     datapro = JSON.parse(localStorage.getItem('data'));
// }

// // عرض البيانات المخزنة عند تحميل الصفحة
// showData();

// // دالة لمسح الكل 
// function deleteAll() {
//     datapro = [];
//     localStorage.clear(); // مسح localStorage
//     showData();
// }

// // تعديل المنتجات
// function updateData(i) {
//     title.value = datapro[i].title;
//     price.value = datapro[i].price;
//     discount.value = datapro[i].discount;
//     taxes.value = datapro[i].taxes;
//     ads.value = datapro[i].ads;
//     getTotal();
//     count.style.display = 'none';
//     category.value = datapro[i].category;
//     submit.innerHTML = 'تحديث';  
//     mood = 'update';              
//     tmp = i;
//     scroll({ top: 0, behavior: 'smooth' });
// }

// // دالة لحساب المجموع
// function getTotal() {
//     if (price.value !== '' && taxes.value !== '' && ads.value !== '' && discount.value !== '') {
//         let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
//         total.innerHTML = result;
//         total.style.background = '#040'; // لون أخضر
//         total.style.color = 'white';
//     } else {
//         total.innerHTML = ''; // مسح القيمة
//         total.style.background = 'red'; // تغيير لون الخلفية إلى الأحمر
//         total.style.color = 'white';
//     }
// }

// // استدعاء الدالة عند الحاجة
// getTotal();

// // البحث
// let searchMood = 'title';
// function getSearchMood(id) {
//     let search = document.getElementById('search');
//     searchMood = (id === 'searchTitle') ? 'title' : 'category';
//     search.placeholder = (id === 'searchTitle') ? 'بحث بالاسم' : 'بحث بالفئة';
//     search.focus();
//     search.value = '';
//     showData();
// }

// function searchDate(value) {
//     let table = '';
//     value = value.toLowerCase();
//     if (searchMood === 'title') {
//         for (let i = 0; i < datapro.length; i++) {
//             if (datapro[i].title.includes(value)) {
//                 table += `
//                 <tr>
//                     <td>${i + 1}</td>
//                     <td>${datapro[i].title}</td>
//                     <td>${datapro[i].price}</td>
//                     <td>${datapro[i].taxes}</td>
//                     <td>${datapro[i].ads}</td>
//                     <td>${datapro[i].discount}</td>
//                     <td>${datapro[i].total}</td>
//                     <td>${datapro[i].category}</td>
//                     <td><button onclick="updateData(${i})">تحديث</button></td>
//                     <td><button onclick="deleteData(${i})">حذف</button></td>
//                 </tr>`;
//             }
//         }
//     } else {
//         for (let i = 0; i < datapro.length; i++) {
//             if (datapro[i].category.includes(value)) {
//                 table += `
//                 <tr>
//                     <td>${i + 1}</td>
//                     <td>${datapro[i].title}</td>
//                     <td>${datapro[i].price}</td>
//                     <td>${datapro[i].taxes}</td>
//                     <td>${datapro[i].ads}</td>
//                     <td>${datapro[i].discount}</td>
//                     <td>${datapro[i].total}</td>
//                     <td>${datapro[i].category}</td>
//                     <td><button onclick="updateData(${i})">تحديث</button></td>
//                     <td><button onclick="deleteData(${i})">حذف</button></td>
//                 </tr>`;
//             }
//         }
//     }
//     document.getElementById('tbody').innerHTML = table;
// }










let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let total = document.getElementById('total');
let count = document.getElementById('count');
let discount = document.getElementById('discount');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
let title = document.getElementById('title');
let search = document.getElementById('search');

let mood = 'create';
let tmp;
let datapro = JSON.parse(localStorage.getItem('data')) || [];

// دالة لحساب الإجمالي
function getTotal() {
    if (price.value && taxes.value && ads.value) {
        let result = (+price.value + +taxes.value + +ads.value) - (+discount.value || 0);
        total.innerHTML = result.toFixed(2); // عرض النتيجة بشكل صحيح
        total.style.background = '#040';
        total.style.color = 'white';
    } else {
        total.innerHTML = '0';
        total.style.background = 'red';
        total.style.color = 'white';
    }
}

// إضافة أحداث لتحديث الإجمالي عند تغيير الحقول
price.addEventListener('input', getTotal);
taxes.addEventListener('input', getTotal);
ads.addEventListener('input', getTotal);
discount.addEventListener('input', getTotal);

// دالة لإضافة المنتج وعرض البيانات في الجدول
submit.addEventListener('click', function() {
    let newproduct = {
        title: title.value.toLowerCase(),
        price: parseFloat(price.value),
        taxes: parseFloat(taxes.value),
        ads: parseFloat(ads.value),
        discount: parseFloat(discount.value),
        total: parseFloat(total.innerHTML),
        count: parseInt(count.value),
        category: category.value.toLowerCase(),
    };

    if (title.value !== '' && price.value !== '' && category.value !== '') {
        if (mood === 'create') {
            if (newproduct.count > 1) {
                for (let i = 0; i < newproduct.count; i++) {
                    datapro.push({ ...newproduct });
                }
            } else {
                datapro.push(newproduct);
            }
        } else {
            datapro[tmp] = newproduct;
            mood = 'create';
            submit.innerHTML = 'create';
            count.style.display = 'block';
        }

        clearInputs();
        localStorage.setItem('data', JSON.stringify(datapro));
        showData();
    }
});

// دالة لعرض البيانات في الجدول
function showData() {
    let table = '';
    for (let i = 0; i < datapro.length; i++) {
        table += `
        <tr>
            <td>${i + 1}</td>
            <td>${datapro[i].title}</td>
            <td>${datapro[i].price}</td>
            <td>${datapro[i].taxes}</td>
            <td>${datapro[i].ads}</td>
            <td>${datapro[i].discount}</td>
            <td>${datapro[i].total}</td>
            <td>${datapro[i].category}</td>
            <td><button onclick="updateData(${i})">تحديث</button></td>
            <td><button onclick="deleteData(${i})">حذف</button></td>
        </tr>`;
    }
    document.getElementById('tbody').innerHTML = table;

    let btnDelete = document.getElementById('ddeletAll');
    if (datapro.length > 0) {
        btnDelete.innerHTML = `<button onclick="deleteAll()">حذف الكل ( ${datapro.length}) </button>`;
    } else {
        btnDelete.innerHTML = '';
    }
}

// استرجاع البيانات من localStorage عند تحميل الصفحة
if (localStorage.getItem('data') !== null) {
    datapro = JSON.parse(localStorage.getItem('data'));
}

// عرض البيانات المخزنة عند تحميل الصفحة
showData();

// دالة لمسح الحقول
function clearInputs() {
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    count.value = '';
    category.value = '';
    total.innerHTML = '0'; // إعادة تعيين الإجمالي
}

// دالة لحذف البيانات
function deleteData(index) {
    datapro.splice(index, 1);
    localStorage.setItem('data', JSON.stringify(datapro));
    showData();
}

// دالة لمسح الكل 
function deleteAll() {
    datapro = [];
    localStorage.clear();
    showData();
}

// تعديل المنتجات
function updateData(i) {
    title.value = datapro[i].title;
    price.value = datapro[i].price;
    discount.value = datapro[i].discount;
    taxes.value = datapro[i].taxes;
    ads.value = datapro[i].ads;
    count.style.display = 'none';
    category.value = datapro[i].category;
    submit.innerHTML = 'تحديث';  
    mood = 'update';              
    tmp = i;
    scroll({ top: 0, behavior: 'smooth' });
}

// البحث
let searchMood = 'title';
function getSearchMood(id) {
    searchMood = (id === 'searchTitle') ? 'title' : 'category';
    search.placeholder = (id === 'searchTitle') ? 'بحث بالاسم' : 'بحث بالفئة';
    search.focus();
    search.value = '';
    showData();
}

function searchDate(value) {
    let table = '';
    value = value.toLowerCase();
    if (searchMood === 'title') {
        for (let i = 0; i < datapro.length; i++) {
            if (datapro[i].title.includes(value)) {
                table += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${datapro[i].title}</td>
                    <td>${datapro[i].price}</td>
                    <td>${datapro[i].taxes}</td>
                    <td>${datapro[i].ads}</td>
                    <td>${datapro[i].discount}</td>
                    <td>${datapro[i].total}</td>
                    <td>${datapro[i].category}</td>
                    <td><button onclick="updateData(${i})">تحديث</button></td>
                    <td><button onclick="deleteData(${i})">حذف</button></td>
                </tr>`;
            }
        }
    } else {
        for (let i = 0; i < datapro.length; i++) {
            if (datapro[i].category.includes(value)) {
                table += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${datapro[i].title}</td>
                    <td>${datapro[i].price}</td>
                    <td>${datapro[i].taxes}</td>
                    <td>${datapro[i].ads}</td>
                    <td>${datapro[i].discount}</td>
                    <td>${datapro[i].total}</td>
                    <td>${datapro[i].category}</td>
                    <td><button onclick="updateData(${i})">تحديث</button></td>
                    <td><button onclick="deleteData(${i})">حذف</button></td>
                </tr>`;
            }
        }
    }
    document.getElementById('tbody').innerHTML = table;
}
