export class Calendar {

    today = new Date();
    currentMonth = this.today.getMonth();
    currentYear = this.today.getFullYear();
    months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    monthDays: number[] = [];

    next() {
        this.currentYear = (this.currentMonth === 11) ? this.currentYear + 1 : this.currentYear;
        this.currentMonth = (this.currentMonth + 1) % 12;
    }

    previous() {
        this.currentYear = (this.currentMonth === 0) ? this.currentYear - 1 : this.currentYear;
        this.currentMonth = (this.currentMonth === 0) ? 11 : this.currentMonth - 1;
    }

    jump(currentYear: string, currentMonth: string) {
        this.currentYear = parseInt(currentYear);
        this.currentMonth = parseInt(currentMonth);
    }

    showCalendar(month: number, year: number) {
        let firstDay = (new Date(year, month)).getDay();

        // creating all cells
        let date = 1;
        for (let i = 0; i < 6; i++) {
            // creates a table row

            //creating individual cells, filing them up with data.
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDay) {
                    this.monthDays.push(0);
                }
                else if (date > this.daysInMonth(month, year)) {
                    break;
                }

                else {
                    this.monthDays.push(date);
                    if (date === this.today.getDate() &&
                        year === this.today.getFullYear() &&
                        month === this.today.getMonth()) {

                    } // color today's date

                    date++;
                }

            }

        }
        console.log(this.monthDays);
    }


    daysInMonth(month: number, year: number): number {
        return 32 - new Date(year, month, 32).getDate();
    }

}
