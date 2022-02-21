import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import Employee from './entities/employee.entity';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
  getAll(): Employee[] {
    return this.employeesService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') employeeId: number): Employee {
    return this.employeesService.getOne(employeeId);
  }

  @Post()
  create(@Body() employeeData: CreateEmployeeDto) {
    return this.employeesService.create(employeeData);
  }

  @Delete(':id')
  remove(@Param('id') employeeId: number) {
    return this.employeesService.remove(employeeId);
  }

  @Patch(':id')
  patch(
    @Param('id') employeeId: number,
    @Body() updateData: UpdateEmployeeDto,
  ) {
    return this.employeesService.patch(employeeId, updateData);
  }
}
