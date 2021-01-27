export class Calendar {

    public readonly months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    public readonly days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    public getNextMonth(): number {
        const currentMonth = new Date().getMonth();
        return (currentMonth + 1) % 12;
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

    // @TODO name is confusing 
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
    public getCurrentWeek(): number {
        const now: any = new Date();
        const d = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
        const dayNum = d.getUTCDay() || 7;
        d.setUTCDate(d.getUTCDate() + 4 - dayNum);
        const yearStart: any = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        return Math.ceil((((now - yearStart) / 86400000) + 1) / 7)
    }


    public getCurrentMonth(): number {
        return (new Date()).getMonth();
    }

    public getCurrentMonthName(): string {
        return this.months[(new Date()).getMonth()];
    }


}
