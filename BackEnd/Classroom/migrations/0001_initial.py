# Generated by Django 3.0.3 on 2020-05-14 10:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Account', '0005_auto_20200514_1836'),
    ]

    operations = [
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='提问标题')),
                ('content', models.TextField(verbose_name='提问内容')),
                ('environment', models.CharField(max_length=255, verbose_name='提问标题')),
                ('state', models.IntegerField(choices=[(1, '一般'), (2, '紧急'), (3, '十万火急')], default=1, verbose_name='情况')),
                ('student', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='Account.Student')),
                ('teacher', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='Account.Teacher')),
            ],
        ),
    ]
