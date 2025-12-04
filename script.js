function generateInvoice() {
    let month = document.getElementById("month").value;
    let qty = Number(document.getElementById("qty").value);
    let rate = Number(document.getElementById("rate").value);
    let supervisor = Number(document.getElementById("supervisor").value);
    let service = Number(document.getElementById("service").value);
    let billno = document.getElementById("billno").value;
    let date = document.getElementById("date").value;

    let amount = qty * rate;
    let total = amount + supervisor + service;

    document.getElementById("b_month").innerText = month;
    document.getElementById("v_qty").innerText = qty;
    document.getElementById("v_rate").innerText = rate;
    document.getElementById("v_amount").innerText = amount;
    document.getElementById("v_super").innerText = supervisor;
    document.getElementById("v_service").innerText = service;
    document.getElementById("v_total").innerText = total;

    document.getElementById("b_no").innerText = billno;
    document.getElementById("b_date").innerText = date;
}

function downloadPDF() {
    const element = document.getElementById("invoice-box");

    const opt = {
        margin: 5,
        filename: "invoice.pdf",
        html2canvas: { scale: 2 },
        jsPDF: { format: "a4", orientation: "portrait" }
    };

    html2pdf().set(opt).from(element).save();
}
