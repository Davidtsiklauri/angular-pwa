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

    public getMonthNumber(): number {
        const currentMonth = new Date().getMonth();
        return currentMonth;
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

    public getCurrentYear(): number {
        return new Date().getFullYear();
    }

    private getWeekNumber(year: Date) {
        const date: any = new Date(year);
        date.setHours(0, 0, 0, 0);
        date.setDate(date.getDate() + 4 - (date.getDay() || 7));
        const yearStart: any = new Date(date.getFullYear(), 0, 1);
        const weekNo = Math.ceil((((date - yearStart) / 86400000) + 1) / 7)
        return weekNo;
    }

    /**
     * 
     * @param year 
     * @returns amount of weeks in year
     */
    getAmountOfWeeksInYear(year: number = this.getCurrentYear()) {
        const d = new Date(year, 11, 31);
        const week = this.getWeekNumber(d);
        return week == 1 ? 52 : week;
    }
    /**
    * 
    * @param year 
    * @returns current week number 
    */
    getNumberOfWeek(): number {
        const today: any = new Date();
        const firstDayOfYear: any = new Date(today.getFullYear(), 0, 1);
        const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
        return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
    }

}
