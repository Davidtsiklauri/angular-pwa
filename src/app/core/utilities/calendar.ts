export class Calendar {

    private months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    private days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    public getNextMonth(): number {
        const currentMonth = new Date().getMonth();
        return (currentMonth + 1) % 12;
    }

    public getNextYear(): number {
        const currentYear = new Date().getFullYear(),
              currentMonth = this.getNextMonth();
        return (currentMonth === 11) ? currentYear + 1 : currentYear;;
    }

    public daysInMonth(month: number, year: number): number {
        return 32 - new Date(year, month, 32).getDate();
    }

    public getFirstDayOfMonth(year?: number, month?: number): string {
        const now = new Date();
        const dayInNum: number = new Date(year || now.getFullYear(), month || now.getMonth()).getDay();
        return this.days[dayInNum];
    }

    public showCalendar(month: number, year: number) {
        let firstDay = (new Date(year, month)).getDay(),
            today = new Date(),
            monthDays = [];
        // creating all cells
        let date = 1;
        for (let i = 0; i < 6; i++) {
            // creates a table row

            //creating individual cells, filing them up with data.
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDay) {
                    monthDays.push(0);
                }
                else if (date > this.daysInMonth(month, year)) {
                    break;
                }

                else {
                    monthDays.push(date);
                    if (date === today.getDate() &&
                        year === today.getFullYear() &&
                        month === today.getMonth()) {

                    } // color today's date

                    date++;
                }

            }

        }
        return monthDays;
    }


   

}
