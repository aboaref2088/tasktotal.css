let datapro = []; // بيانات المخزون
let invoiceData = []; // بيانات الفاتورة
let searchMood = 'title'; // وضع البحث

// استرجاع البيانات من localStorage عند تحميل الصفحة
if (localStorage.getItem('data') !== null) {
    datapro = JSON.parse(localStorage.getItem('data'));
}

// دالة لإضافة المنتج
function addProduct(newProduct) {
    datapro.push(newProduct);
    localStorage.setItem('data', JSON.stringify(datapro));
}

// دالة للبحث وعرض الأصناف
function searchDate(value) {
    let table = '';
    value = value.toLowerCase();
    for (let i = 0; i < datapro.length; i++) {
        if (searchMood === 'title' && datapro[i].title.includes(value)) {
            table += createProductRow(datapro[i], i);
        } else if (searchMood === 'category' && datapro[i].category.includes(value)) {
            table += createProductRow(datapro[i], i);
        }
    }
    document.getElementById('searchResults').innerHTML = table;
}

// دالة لإنشاء صف منتج
function createProductRow(product, index) {
    return `
        <tr onclick="addToInvoice(datapro[${index}], this)">
            <td>${index + 1}</td>
            <td>${product.title}</td>
            <td>${product.price}</td>
            <td>${product.taxes}</td>
            <td>${product.ads}</td>
            <td>${product.discount}</td>
            <td>${product.total}</td>
            <td>${product.category}</td>
        </tr>`;
}

// دالة لتغيير وضع البحث
function getSearchMood(id) {
    let search = document.getElementById('search');
    searchMood = id === 'searchTitle' ? 'title' : 'category';
    search.placeholder = searchMood === 'title' ? 'بحث بالاسم' : 'بحث بالفئة';
    search.focus();
    search.value = '';
    showData();
}

// دالة لإضافة المنتج إلى الفاتورة
function addToInvoice(product, row) {
    invoiceData.push(product);
    showInvoiceData();
    row.remove(); // إزالة الصف من نتائج البحث
    document.getElementById('search').value = ''; // تفريغ خانة البحث
}

// دالة لعرض بيانات الفاتورة
function showInvoiceData() {
    let table = '';
    let count = 0;
    let sum = 0;

    for (let i = 0; i < invoiceData.length; i++) {
        table += `
        <tr>
            <td>${i + 1}</td>
            <td>${invoiceData[i].title}</td>
            <td>${invoiceData[i].total.toFixed(2)}</td>
            <td><button onclick="removeFromInvoice(${i})">حذف</button></td>
        </tr>`;
        count++;
        sum += invoiceData[i].total;
    }
    document.getElementById('invoiceBody').innerHTML = table;
    document.getElementById('totalItems').innerHTML = count;
    document.getElementById('totalPrice').innerHTML = sum.toFixed(2); // تحديث إجمالي الفاتورة

    // تحديث زر TOTAL
    document.getElementById('total').innerHTML = `الإجمالي: ${sum.toFixed(2)}`;
}

// دالة لإزالة صنف من الفاتورة
function removeFromInvoice(index) {
    invoiceData.splice(index, 1);
    showInvoiceData();
}

// دالة لإتمام عملية البيع
document.getElementById('completeSale').addEventListener('click', function() {
    if (invoiceData.length > 0) {
        invoiceData.forEach(item => {
            datapro = datapro.filter(data => data.title !== item.title); // حذف من المخزون
        });

        localStorage.setItem('data', JSON.stringify(datapro)); // تحديث المخزون في التخزين المحلي

        alert('تم إتمام البيع بنجاح!');
        invoiceData = []; // مسح قائمة الفاتورة
        showInvoiceData(); // تحديث عرض الفاتورة
        searchDate(''); // تفريغ خانة البحث
    } else {
        alert('لا توجد أصناف في الفاتورة.');
    }
});

// عرض البيانات المخزنة عند تحميل الصفحة
searchDate('');
